package com.sorsix.forum.repository

import com.sorsix.forum.domain.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<User, String> {
    fun findByUsername(username: String): User
    fun existsByUsername(username: String): Boolean
}