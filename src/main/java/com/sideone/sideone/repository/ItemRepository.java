package com.sideone.sideone.repository;

import com.sideone.sideone.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
    // You can add custom queries here if needed
}
