import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-items.dto';
import { ItemsService } from './items.service'
import { Item } from './interface/item.interface'

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id): Item {
        return this.itemsService.findOne(id)
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `name: ${createItemDto.name}`
    }
}
