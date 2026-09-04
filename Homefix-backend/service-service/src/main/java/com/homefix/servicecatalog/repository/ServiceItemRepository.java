package com.homefix.servicecatalog.repository;

import com.homefix.servicecatalog.entity.ServiceItem;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ServiceItemRepository extends JpaRepository<ServiceItem, Long> {
    List<ServiceItem> findByNameContainingIgnoreCase(String keyword);
    List<ServiceItem> findByCategoryId(Long categoryId);
}
