package com.homefix.servicecatalog.controller;

import com.homefix.servicecatalog.entity.ServiceItem;
import com.homefix.servicecatalog.repository.ServiceItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/services")
@RequiredArgsConstructor
public class ServiceItemController {
    private final ServiceItemRepository repo;

    @GetMapping public List<ServiceItem> all() { return repo.findAll(); }

    @GetMapping("/{id}")
    public ServiceItem one(@PathVariable Long id) { return repo.findById(id).orElseThrow(); }

    @GetMapping("/search")
    public List<ServiceItem> search(@RequestParam String keyword) {
        return repo.findByNameContainingIgnoreCase(keyword);
    }

    @GetMapping("/by-category/{categoryId}")
    public List<ServiceItem> byCategory(@PathVariable Long categoryId) {
        return repo.findByCategoryId(categoryId);
    }

    @PostMapping public ServiceItem create(@RequestBody ServiceItem s) { return repo.save(s); }

    @PutMapping("/{id}")
    public ServiceItem update(@PathVariable Long id, @RequestBody ServiceItem s) {
        s.setId(id); return repo.save(s);
    }

    @DeleteMapping("/{id}") public void delete(@PathVariable Long id) { repo.deleteById(id); }
}
