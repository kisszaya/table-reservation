import {
  IDiscount,
} from "kisszaya-table-reservation/lib/interfaces";

export class DiscountEntity implements IDiscount {
  discount_id?: number;
  description: string;
  is_active?: boolean = false;
  photos?: string[] = [];
  restaurant_id: number;
  title: string;

  constructor(discount: IDiscount) {
    this.restaurant_id = discount.restaurant_id;
    this.discount_id = discount.discount_id;
    this.description = discount.description;
    this.is_active = discount.is_active;
    this.photos = discount.photos;
    this.title = discount.title;
  }
}
