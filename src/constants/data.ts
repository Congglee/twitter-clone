import { UserType } from "@/schemas/user-schema";

export const DUMMY_USERS: UserType[] = [
  {
    id: "user1",
    name: "John Doe",
    email: "john.doe@example.com",
    dateOfBirth: new Date("1990-01-15"),
    bio: "Software developer by day, gamer by night 🎮",
    website: "https://johndoe.dev",
    username: "johndoe",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=John",
    coverPhoto: "https://picsum.photos/seed/user1/800/200",
  },
  {
    id: "user2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    dateOfBirth: new Date("1992-08-23"),
    bio: "Digital artist | Photography enthusiast 📸",
    website: "https://janesmith.art",
    username: "janesmith",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Jane",
    coverPhoto: "https://picsum.photos/seed/user2/800/200",
  },
  {
    id: "user3",
    name: "Alex Johnson",
    email: "alex.j@example.com",
    dateOfBirth: new Date("1988-03-30"),
    bio: null,
    website: null,
    username: "alexj",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=Alex",
    coverPhoto: null,
  },
];
