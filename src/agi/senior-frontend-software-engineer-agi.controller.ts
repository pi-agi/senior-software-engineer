import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { MainAGI, OpenAIAzureProvider, ActionType } from '@pi-agi/core';

/**
 * A class representing a Senior Frontend Software Engineer AGI.
 */
export class SeniorFrontendSoftwareEngineerAGI extends MainAGI<ActionType> {
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
        'frontend',
        'senior-frontend-engineer-angular-main.agi.md'
      )
    );

    this.nextPrompt = await this.fileUtil.readFileContent(
      path.join(
        __dirname,
        '..',
        'asset',
        'agi',
        'software-engineer',
        'frontend',
        'senior-frontend-engineer-angular-next.agi.md'
      )
    );
  }
}
