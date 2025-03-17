package com.sideone.sideone.controller;

import com.sideone.sideone.service.ItemService;
import com.sideone.sideone.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
public class AuctionController {

    @Autowired
    private ItemService itemService;

    @GetMapping("/items")
    public List<Item> getItems() throws IOException {
        return itemService.getItems();
    }
}
