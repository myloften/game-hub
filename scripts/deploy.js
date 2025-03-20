require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const PROJECT_NAME = process.env.PROJECT_NAME;

const API_BASE = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/pages`;

async function deploy() {
  try {
    console.log('Starting deployment...');

    // 1. 创建部署
    console.log('Creating deployment...');
    const createDeploymentResponse = await axios.post(
      `${API_BASE}/projects/${PROJECT_NAME}/deployments`,
      {},
      {
        headers: {
          'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const deploymentId = createDeploymentResponse.data.result.id;
    console.log(`Deployment created with ID: ${deploymentId}`);

    // 2. 上传文件
    console.log('Uploading files...');
    const formData = new FormData();
    
    // 递归读取 .next 目录
    function addFilesToForm(dir, base = '') {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const fullPath = `${dir}/${file}`;
        const relativePath = base ? `${base}/${file}` : file;
        
        if (fs.statSync(fullPath).isDirectory()) {
          addFilesToForm(fullPath, relativePath);
        } else {
          formData.append('files', fs.createReadStream(fullPath), {
            filename: relativePath,
          });
        }
      }
    }

    addFilesToForm('.next');

    await axios.post(
      `${API_BASE}/deployments/${deploymentId}/files`,
      formData,
      {
        headers: {
          'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
          ...formData.getHeaders(),
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      }
    );

    console.log('Files uploaded successfully');

    // 3. 完成部署
    console.log('Finalizing deployment...');
    await axios.post(
      `${API_BASE}/deployments/${deploymentId}/phases/deployment/done`,
      {},
      {
        headers: {
          'Authorization': `Bearer ${CLOUDFLARE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Deployment completed successfully!');
    console.log(`Visit your site at: https://${PROJECT_NAME}.pages.dev`);
  } catch (error) {
    console.error('Deployment failed:', error.response?.data || error.message);
    process.exit(1);
  }
}

deploy(); 