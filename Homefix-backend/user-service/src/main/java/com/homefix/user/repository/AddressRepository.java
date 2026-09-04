package com.homefix.user.repository;

import com.homefix.user.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AddressRepository extends JpaRepository<Address, Long> {
    List<Address> findByUserEmail(String userEmail);
}
