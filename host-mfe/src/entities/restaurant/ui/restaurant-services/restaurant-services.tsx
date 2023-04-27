import { useAuthStore } from "shared/lib/hooks";
import { Group } from "@mantine/core";

import { IRestaurantServices } from "../../types";
import { $restaurantInfo } from "../../model";
import { RestaurantServiceCard } from "..";

interface Props {
  services: IRestaurantServices;
}

export const RestaurantServices = (props: Props) => {
  const { services } = props;
  const { roles } = useAuthStore($restaurantInfo);

  return (
    <Group position="apart" spacing="sm">
      {services.map((service) => (
        <RestaurantServiceCard
          key={service.title}
          isAvailable={getAvailable(roles, service.roles)}
          {...service}
        />
      ))}
    </Group>
  );
};

const getAvailable = (roles: string | string[], serviceRoles: string[]) => {
  if (typeof roles === "string") {
    return serviceRoles.includes(roles);
  }

  return roles.some((role) => serviceRoles.includes(role));
};
