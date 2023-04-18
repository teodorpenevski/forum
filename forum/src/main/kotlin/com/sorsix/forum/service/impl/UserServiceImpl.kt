package com.sorsix.forum.service.impl

import com.sorsix.forum.domain.User
import com.sorsix.forum.domain.UserDto
import com.sorsix.forum.repository.UserRepository
import com.sorsix.forum.service.UserService
import org.springframework.stereotype.Service
import java.time.LocalDateTime
import java.util.*

@Service
class UserServiceImpl(private val repository: UserRepository) : UserService {

    override fun findAllUsers(): List<User> = repository.findAll()

    override fun getUserByUsername(username: String): User = repository.findByUsername(username)

    override fun saveUser(user: UserDto): User {
        val newUser = User(user.username, user.password, LocalDateTime.now())
        return repository.save(newUser)
    }

    override fun existsByUsername(username: String): Boolean {
        return repository.existsByUsername(username)
    }

}