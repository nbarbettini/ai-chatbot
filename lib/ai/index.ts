import { togetherai, createTogetherAI } from '@ai-sdk/togetherai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: createTogetherAI({
      apiKey: process.env.TOGETHERAI_API_KEY,
    }).languageModel(apiIdentifier),
    middleware: customMiddleware,
  });
};

export const imageGenerationModel = null; //togetherai.image('dall-e-3');
