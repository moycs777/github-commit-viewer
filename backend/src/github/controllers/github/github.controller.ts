import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from '../../services/github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('commits/:username/:repository')
  async getCommitHistory(
    @Param('username') username: string,
    @Param('repository') repository: string,
  ) {
    return this.githubService.getCommitHistory(username, repository);
  }
}
