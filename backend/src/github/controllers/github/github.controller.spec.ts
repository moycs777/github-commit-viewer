import { Test, TestingModule } from '@nestjs/testing';
import { GithubController } from './github.controller';
import { GithubService } from '../../services/github.service';

describe('GithubController', () => {
  let controller: GithubController;
  let githubService: GithubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubController],
      providers: [GithubService],
    }).compile();

    controller = module.get<GithubController>(GithubController);
    githubService = module.get<GithubService>(GithubService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getCommitHistory', () => {
    it('should return the commit history from the GithubService', async () => {
      const mockCommitHistory = [
        { commit: 'Commit 1' },
        { commit: 'Commit 2' },
      ];
      jest
        .spyOn(githubService, 'getCommitHistory')
        .mockResolvedValue(mockCommitHistory);

      const username = 'moycs777';
      const repository = 'github-commit-viewer';

      const result = await controller.getCommitHistory(username, repository);

      expect(result).toEqual(mockCommitHistory);
    });
  });
});
