"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubService = void 0;
const common_1 = require("@nestjs/common");
let GithubService = class GithubService {
    async getCommitHistory(username, repository) {
        try {
            const githubApiBaseUrl = process.env.GITHUB_BASE_URL;
            const response = await fetch(`${githubApiBaseUrl}/repos/${username}/${repository}/commits`);
            if (!response.ok) {
                throw new Error(`Error searching in GitHub: ${response.statusText}`);
            }
            return response.json();
        }
        catch (error) {
            throw new Error(`Error getting commits from GitHub: ${error.message}`);
        }
    }
};
exports.GithubService = GithubService;
exports.GithubService = GithubService = __decorate([
    (0, common_1.Injectable)()
], GithubService);
//# sourceMappingURL=github.service.js.map