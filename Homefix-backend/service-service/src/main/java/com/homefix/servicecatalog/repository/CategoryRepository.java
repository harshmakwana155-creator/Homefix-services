package com.homefix.servicecatalog.repository;

import com.homefix.servicecatalog.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {}
