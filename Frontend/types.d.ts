// types.d.ts
declare module 'expo-document-picker' {
    export interface DocumentPickerSuccessResult {
      type: 'success';
      uri: string;
      name: string;
      mimeType: string;
      size: number;
    }
  
    export interface DocumentPickerResult {
      type: 'cancel' | 'success';
      uri?: string;
      name?: string;
      mimeType?: string;
      size?: number;
    }
  
    export function getDocumentAsync(options: any): Promise<DocumentPickerResult>;
  }
  