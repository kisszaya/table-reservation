export interface IDiscount {
  discount_id?: number;
  title: string;
  description: string;
  photos?: string[];
  is_active?: boolean;
  restaurant_id: number;
}
