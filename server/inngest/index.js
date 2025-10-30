import { Inngest } from "inngest";
import prisma from "../configs/prisma.js";

export const inngest = new Inngest({ id: "synca", name: "Synca" });

const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { data } = event
    try {
      await prisma.user.create({
        data: {
          id: data.id,
          email: data?.email_addresses[0]?.email_address,
          name: data?.first_name + " " + data?.last_name,
          image: data?.image_url,
        },
      });
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
);

const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-from-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { data } = event;
    try {
      await prisma.user.delete({
        where: {
          id: data.id,
        },
      });
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }
);

const syncUserUpdation = inngest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { data } = event;
    try {
      await prisma.user.update({
        where: {
          id: data.id,
        },
        data: {
          email: data?.email_addresses[0]?.email_address,
          name: data?.first_name + " " + data?.last_name,
          image: data?.image_url,
        },
      });
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }
);

export const functions = [syncUserCreation, syncUserDeletion, syncUserUpdation];
