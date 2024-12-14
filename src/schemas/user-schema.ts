import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  dateOfBirth: z.date(),
  bio: z.string().nullable(),
  website: z.string().nullable(),
  username: z.string().nullable(),
  avatar: z.string().nullable(),
  coverPhoto: z.string().nullable(),
});

export type UserType = z.TypeOf<typeof UserSchema>;
