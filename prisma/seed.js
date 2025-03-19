"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var games = [
    // Arcade Games
    {
        title: 'Pac-Man',
        description: 'Classic maze chase game where you control Pac-Man to eat all dots while avoiding ghosts.',
        imageUrl: '/games/pacman.jpg',
        gameUrl: 'https://freepacman.org/',
        category: 'Arcade',
    },
    {
        title: 'Arkanoid',
        description: 'Classic brick-breaking game where you control a paddle to bounce the ball and break blocks.',
        imageUrl: '/games/arkanoid.jpg',
        gameUrl: 'https://arkanoid.online/',
        category: 'Arcade',
    },
    {
        title: 'Hextris',
        description: 'Rotate hexagonal blocks to match colors and clear lines in this unique puzzle game.',
        imageUrl: '/games/hextris.jpg',
        gameUrl: 'https://hextris.io/',
        category: 'Arcade',
    },
    {
        title: 'Duck Hunt',
        description: 'Classic shooting game where you aim to shoot ducks as they fly across the screen.',
        imageUrl: '/games/duckhunt.jpg',
        gameUrl: 'https://duckhuntjs.com/',
        category: 'Arcade',
    },
    // Action Games
    {
        title: 'HexGL',
        description: 'Futuristic racing game with high-speed action on hexagonal tracks.',
        imageUrl: '/games/hexgl.jpg',
        gameUrl: 'https://hexgl.bkcore.com/play/',
        category: 'Action',
    },
    {
        title: 'Lost World',
        description: 'Explore a mysterious world filled with puzzles and challenges.',
        imageUrl: '/games/lostworld.jpg',
        gameUrl: 'https://lostworld.io/',
        category: 'Action',
    },
    {
        title: 'Powerline',
        description: 'Connect power nodes to create circuits in this challenging puzzle game.',
        imageUrl: '/games/powerline.jpg',
        gameUrl: 'https://powerline.io/',
        category: 'Action',
    },
    {
        title: 'Diep',
        description: 'Tank battle game where you upgrade your tank and fight other players.',
        imageUrl: '/games/diep.jpg',
        gameUrl: 'https://diep.io/',
        category: 'Action',
    },
    {
        title: 'Wings',
        description: 'Aerial combat game where you pilot aircraft in intense dogfights.',
        imageUrl: '/games/wings.jpg',
        gameUrl: 'https://wings.io/',
        category: 'Action',
    },
    {
        title: 'Starve',
        description: 'Survive in a harsh wilderness by gathering resources and crafting items.',
        imageUrl: '/games/starve.jpg',
        gameUrl: 'https://starve.io/',
        category: 'Action',
    },
    // Casual Games
    {
        title: 'Gartic',
        description: 'Draw and guess words in this multiplayer drawing game.',
        imageUrl: '/games/gartic.jpg',
        gameUrl: 'https://gartic.io/',
        category: 'Casual',
    },
    {
        title: 'Territorial',
        description: 'Capture territory and expand your influence in this strategy game.',
        imageUrl: '/games/territorial.jpg',
        gameUrl: 'https://territorial.io/',
        category: 'Strategy',
    },
    {
        title: 'Deeeep',
        description: 'Evolve and survive as different sea creatures in this underwater adventure.',
        imageUrl: '/games/deeeep.jpg',
        gameUrl: 'https://deeeep.io/',
        category: 'Action',
    },
    {
        title: 'Splix',
        description: 'Capture territory while avoiding other players lines.',
        imageUrl: '/games/splix.jpg',
        gameUrl: 'https://splix.io/',
        category: 'Strategy',
    },
    {
        title: 'Generals',
        description: 'Command armies and conquer territories in this strategic war game.',
        imageUrl: '/games/generals.jpg',
        gameUrl: 'https://generals.io/',
        category: 'Strategy',
    },
    // Sports Games
    {
        title: 'Slither',
        description: 'Grow your snake by eating glowing orbs while avoiding other players.',
        imageUrl: '/games/slither.jpg',
        gameUrl: 'https://slither.io/',
        category: 'Sports',
    },
    {
        title: 'Curve Fever',
        description: 'Draw lines to block other players while avoiding collisions.',
        imageUrl: '/games/curvefever.jpg',
        gameUrl: 'https://curvefever.pro',
        category: 'Sports',
    },
    {
        title: 'Evades',
        description: 'Dodge obstacles and enemies in this fast-paced survival game.',
        imageUrl: '/games/evades.jpg',
        gameUrl: 'https://evades.io/',
        category: 'Sports',
    },
    {
        title: 'Brutal',
        description: 'Fight waves of enemies in this intense action game.',
        imageUrl: '/games/brutal.jpg',
        gameUrl: 'https://brutal.io/',
        category: 'Sports',
    },
    {
        title: 'Wilds',
        description: 'Survive in a wilderness full of dangerous creatures and other players.',
        imageUrl: '/games/wilds.jpg',
        gameUrl: 'https://wilds.io/',
        category: 'Sports',
    },
    {
        title: 'Stabfish',
        description: 'Battle other sea creatures in this underwater fighting game.',
        imageUrl: '/games/stabfish.jpg',
        gameUrl: 'https://stabfish.io/',
        category: 'Sports',
    },
    // Shooting Games
    {
        title: 'Krunker',
        description: 'Fast-paced first-person shooter with various game modes.',
        imageUrl: '/games/krunker.jpg',
        gameUrl: 'https://krunker.io/',
        category: 'Shooting',
    },
    {
        title: 'Shell Shock',
        description: 'Artillery game where you battle other tanks with various weapons.',
        imageUrl: '/games/shellshock.jpg',
        gameUrl: 'https://shellshock.io/',
        category: 'Shooting',
    },
    {
        title: 'Zombs Royale',
        description: 'Battle royale game with zombies and survival elements.',
        imageUrl: '/games/zombsroyale.jpg',
        gameUrl: 'https://zombsroyale.io/',
        category: 'Shooting',
    },
    {
        title: 'Surviv',
        description: '2D battle royale game with intense combat and strategy.',
        imageUrl: '/games/surviv.jpg',
        gameUrl: 'https://surviv.io/',
        category: 'Shooting',
    },
    {
        title: '1v1.LOL',
        description: 'Build and battle in this competitive building combat game.',
        imageUrl: '/games/1v1lol.jpg',
        gameUrl: 'https://1v1.lol/',
        category: 'Shooting',
    }
];
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, games_1, game, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Start seeding ...');
                    _i = 0, games_1 = games;
                    _a.label = 1;
                case 1:
                    if (!(_i < games_1.length)) return [3 /*break*/, 4];
                    game = games_1[_i];
                    return [4 /*yield*/, prisma.game.create({
                            data: game,
                        })];
                case 2:
                    result = _a.sent();
                    console.log("Created game with id: ".concat(result.id));
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log('Seeding finished.');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
