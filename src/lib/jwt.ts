import jwt from 'jsonwebtoken';

interface JWTPayload {
  id: string;
  email: string | null;
  name: string | null;
}

export async function signJWT(payload: JWTPayload): Promise<string> {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET || 'fallback-secret',
    { expiresIn: '7d' }
  );
}

export async function verifyJWT(token: string): Promise<JWTPayload> {
  return jwt.verify(
    token,
    process.env.JWT_SECRET || 'fallback-secret'
  ) as JWTPayload;
} 