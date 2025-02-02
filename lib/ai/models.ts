// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'deepseek-ai/DeepSeek-V3',
    label: 'DeepSeek-V3',
    apiIdentifier: 'deepseek-ai/DeepSeek-V3',
    description: 'Large model for chat',
  },
  {
    id: 'deepseek-ai/DeepSeek-R1',
    label: 'DeepSeek-R1',
    apiIdentifier: 'deepseek-ai/DeepSeek-R1',
    description: 'Reasoning model for complex tasks',
  },
  {
    id: 'meta-llama/Llama-3.3-70B-Instruct-Turbo',
    label: 'Llama-3.3-70B-Instruct-Turbo',
    apiIdentifier: 'meta-llama/Llama-3.3-70B-Instruct-Turbo',
    description: 'Large model for chat',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'deepseek-ai/DeepSeek-V3';
