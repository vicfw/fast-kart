import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { User } from "@/lib/types/globalTypes";
import { userStateStorageKey } from "@/lib/constants/globalConstants";

type UserAndExpiredAt = User & { expiredAt: string };

interface UserState {
  user: UserAndExpiredAt | undefined;

  addUser: (user: UserAndExpiredAt) => void;
  removeUser: () => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: undefined,
        addUser: (incomingUser: UserAndExpiredAt) =>
          set({ user: incomingUser }),
        removeUser: () => set({ user: undefined }),
      }),
      {
        name: userStateStorageKey,
      }
    )
  )
);
