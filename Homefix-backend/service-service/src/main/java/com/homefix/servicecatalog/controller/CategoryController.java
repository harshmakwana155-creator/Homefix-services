package com.homefix.servicecatalog.controller;

import com.homefix.servicecatalog.entity.Category;
import com.homefix.servicecatalog.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryRepository repo;

    @GetMapping public List<Category> all() { return repo.findAll(); }
    @PostMapping public Category create(@RequestBody Category c) { return repo.save(c); }
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id) { repo.deleteById(id); }
}
