import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import {
  ActionType,
  ActionUtil,
  MainAGI,
  OpenAIAzureProvider,
} from '@pi-agi/core';

/**
 * A class representing a Senior Backend Software Engineer AGI.
 */
export class SeniorBackendSoftwareEngineerAGI extends MainAGI<ActionType> {
  constructor(
    openAIProvider: OpenAIAzureProvider,
    maxRetryCount: number,
    maxRetryInterval: number
  ) {
    super(openAIProvider, maxRetryCount, maxRetryInterval);
  }

  /**
   * Initializes the AGI.
   */
  async init() {
    this.consolidationId = uuidv4();
    super.consolidationId = this.consolidationId;

    super.initialize(__dirname, this.consolidationId);

    this.mainPrompt = await this.fileUtil.readFileContent(
      path.join(
        __dirname,
        '..',
        'asset',
        'agi',
        'software-engineer',
        'backend',
        'senior-backend-engineer-nodejs-with-typescript-main.agi.md'
      )
    );

    this.nextPrompt = await this.fileUtil.readFileContent(
      path.join(
        __dirname,
        '..',
        'asset',
        'agi',
        'software-engineer',
        'backend',
        'senior-backend-engineer-nodejs-with-typescript-next.agi.md'
      )
    );

    this.actionUtil = new ActionUtil<ActionType>(
      this.loggerUtil,
      this.taskDir,
      this.ltmPath
    );
  }
}
