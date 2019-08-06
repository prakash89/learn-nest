import { Injectable } from '@nestjs/common';
import { Item } from './interface/item.interface'

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: '12345',
            name: 'televison',
            description: 'first item',
            itemNumber: 1
        },
        {
            id: '12346666',
            name: 'chair',
            description: 'first item',
            itemNumber: 2
        }
    ];

    findAll(): Item[] {
        return this.items
    }

    findOne(id: string): Item {
        return this.items.find(item => item.id == id)
    }
}
