import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../shared/dish';
import { Leader } from '../shared/leader';
import { Promotion } from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish = {
    id: '',
    name: '',
    image: '',
    category: '',
    featured: false,
    label: '',
    price: '',
    description: '',
    comments: []
  };
  promotion: Promotion = {
    id: '',
    name: '',
    image: '',
    label: '',
    price: '',
    featured: false,
    description: ''
  };
  leader: Leader = {
    id: '',
    name: '',
    image: '',
    designation: '',
    abbr: '',
    featured: false,
    description: ''
  }

  constructor(private dishService: DishService, private promoService: PromotionService, private leaderService: LeaderService ) {}

  ngOnInit(): void {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promoService.getFeaturedPromotion();
    this.leader = this.leaderService.getFeaturedLeader();
  }

}
