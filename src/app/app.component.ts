import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { AppState } from './store/models/app-state.model';
import { Store } from '@ngrx/store';
import { ShoppingItem } from './store/models/shopping-item.model';
import { Observable } from 'rxjs';
import { AddItemAction, ShoppingActionTypes, RemoveItemAction } from './store/actions/shopping.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'shopping-list';
    newShoppingItem: ShoppingItem = { id: '', name: '' };

    shoppingItems$: Observable<ShoppingItem[]>;
    constructor(private store: Store<AppState>) { }


    ngOnInit(): void {

        const self = this;
        this.shoppingItems$ = this.store.select(store => store.shopping);

    }

    addItem() {
        this.newShoppingItem.id = uuid();
        this.store.dispatch(new AddItemAction(this.newShoppingItem));
        this.newShoppingItem = { id: '', name: '' };
    }

    removeItem(id: string) {
        this.store.dispatch(new RemoveItemAction(id));
    }
}






