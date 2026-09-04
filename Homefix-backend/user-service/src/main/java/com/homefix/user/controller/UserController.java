package com.homefix.user.controller;

import com.homefix.user.entity.Address;
import com.homefix.user.entity.UserProfile;
import com.homefix.user.repository.AddressRepository;
import com.homefix.user.repository.UserProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserProfileRepository profileRepo;
    private final AddressRepository addressRepo;

    @GetMapping("/profile")
    public UserProfile getProfile(@RequestParam String email) {
        return profileRepo.findByEmail(email).orElseThrow();
    }

    @PutMapping("/profile")
    public UserProfile updateProfile(@RequestBody UserProfile profile) {
        return profileRepo.save(profile);
    }

    @GetMapping("/addresses")
    public List<Address> getAddresses(@RequestParam String email) {
        return addressRepo.findByUserEmail(email);
    }

    @PostMapping("/addresses")
    public Address addAddress(@RequestBody Address address) {
        return addressRepo.save(address);
    }

    @PutMapping("/addresses/{id}")
    public Address updateAddress(@PathVariable Long id, @RequestBody Address address) {
        address.setId(id);
        return addressRepo.save(address);
    }

    @DeleteMapping("/addresses/{id}")
    public void deleteAddress(@PathVariable Long id) {
        addressRepo.deleteById(id);
    }
}
