"use server"


import { revalidatePath } from "next/cache"

export async function follow(currentUserId: string, targetUserId: string) {
  

  revalidatePath(`/users/${currentUserId}`)
}

export async function unfollow(currentUserId: string, targetUserId: string) {
  

  revalidatePath(`/users/${currentUserId}`)
} 