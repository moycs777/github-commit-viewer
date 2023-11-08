import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubService {
  async getCommitHistory(username: string, repository: string) {
    try {
      const githubApiBaseUrl: string = process.env.GITHUB_BASE_URL;
      const response = await fetch(
        `${githubApiBaseUrl}/repos/${username}/${repository}/commits`,
      );

      if (!response.ok) {
        throw new Error(`Error searching in GitHub: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      throw new Error(`Error getting commits from GitHub: ${error.message}`);
    }
  }
}
