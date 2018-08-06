package com.bookstore.service;

import java.util.Set;

import com.bookstore.domain.User;
import com.bookstore.domain.UserBilling;
import com.bookstore.domain.UserPayment;
import com.bookstore.domain.security.UserRole;

public interface UserService {

	User createUser(User user, Set<UserRole> userRoles);
	
	User findByUsername (String username);
	
	User findByEmail (String email);
	
	User findById (Long id);
	
	User save (User user);
	
	void updateUserPaymentInfo(UserBilling userBilling, UserPayment userPayment, User user);
	
	void updateUserBilling(UserBilling userBilling, UserPayment userPayment, User user);
	
	void setUserDefaultPayment(Long userPaymentId, User user);
}
