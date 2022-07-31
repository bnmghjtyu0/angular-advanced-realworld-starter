export interface Article {
  id: string;
  title: string;
  /**簡單的內容 */
  description: string;
  /**完整的內容 */
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  author: string;
}
