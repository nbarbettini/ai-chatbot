import { createTogetherAI } from '@ai-sdk/togetherai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

const togetherAI = createTogetherAI({
  apiKey: process.env.TOGETHERAI_API_KEY,
});

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: togetherAI.languageModel(apiIdentifier),
    middleware: customMiddleware,
  });
};

// const imageModel = togetherAI.imageModel!('black-forest-labs/FLUX.1.1-pro');
// export const imageGenerationModel = imageModel;
