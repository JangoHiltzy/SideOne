package com.sideone.sideone.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sideone.sideone.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class ItemService {

        @Autowired
        private ResourceLoader resourceLoader;

        public List<Item> getItems() throws IOException {
                Resource resource = resourceLoader.getResource("classpath:data/items.json");

                ObjectMapper objectMapper = new ObjectMapper();
                return objectMapper.readValue(resource.getInputStream(), new TypeReference<List<Item>>() {
                });
        }
}
