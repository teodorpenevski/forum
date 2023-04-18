package com.sorsix.forum.service

import com.sorsix.forum.domain.User
import com.sorsix.forum.domain.UserDto

interface UserService {

    fun findAllUsers(): List<User>
    fun getUserByUsername(username: String): User
    fun saveUser(user: UserDto): User
    fun existsByUsername(username: String): Boolean
}