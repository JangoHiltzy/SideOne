package com.sideone.sideone.service;

import com.sideone.sideone.model.Item;
import com.sideone.sideone.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

        @Autowired
        private ItemRepository itemRepository;

        public List<Item> getItems() {
                return itemRepository.findAll();
        }

        public Item saveItem(Item item) {
                return itemRepository.save(item);
        }

        public Item getItemById(Long id) {
                return itemRepository.findById(id).orElse(null);
        }

        public void deleteItem(Long id) {
                itemRepository.deleteById(id);
        }
}
