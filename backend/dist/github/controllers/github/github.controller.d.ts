import { GithubService } from '../../services/github.service';
export declare class GithubController {
    private readonly githubService;
    constructor(githubService: GithubService);
    getCommitHistory(username: string, repository: string): Promise<any>;
}
