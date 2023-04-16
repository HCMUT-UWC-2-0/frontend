import { ROLES } from "@constants/roles";
import { useAccountStore } from "@states/account";

import { AdminScreen } from "./AdminScreen";
import { StudentScreen } from "./StudentScreen";

export const AppScreen: IComponent = () => {
  const { role } = useAccountStore();
  return (
    <main className="min-h-screen dark:text-white p-4">
      {role === ROLES.ADMIN && <AdminScreen />}
      {role === ROLES.STUDENT && <StudentScreen />}
    </main>
  );
};
