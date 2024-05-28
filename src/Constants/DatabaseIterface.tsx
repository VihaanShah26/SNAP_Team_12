export const databaseFields = {
  id: 'id' as const,
  username: 'username' as const,
  contact_name: 'contact_name' as const,
  relationship: 'relationship' as const,
  spend_time: 'spend_time' as const,
  current_interests: 'current_interests' as const,
  helps_me: 'helps_me' as const,
  communication_frequency: 'communication_frequency' as const,
  meet: 'meet' as const,
  friends: 'friends' as const,
  closest_city: 'closest_city' as const,
  closest_friend1: 'closest_friend1' as const,
  closest_friend2: 'closest_friend2' as const,
  closest_friend3: 'closest_friend3' as const,
};

//   export interface ContactCard {
//     [databaseFields.id]: number;
//     [databaseFields.username]: string;
//     [databaseFields.contact_name]: string;
//     [databaseFields.relationship]: string;
//     [databaseFields.spend_time]: string;
//     [databaseFields.current_interests]: string;
//     [databaseFields.helps_me]: string;
//     [databaseFields.communication_frequency]: string;
//     [databaseFields.meet]: string;
//     [databaseFields.closest_city]: string;
//     [databaseFields.closest_friend1]: string;
//     [databaseFields.closest_friend2]: string;
//     [databaseFields.closest_friend3]: string;
//   }

export interface ContactCard {
  id: number;
  username: string;
  contact_name: string;
  relationship: string;
  spend_time: string;
  current_interests: Array<string>;
  helps_me: string;
  communication_frequency: string;
  meet: string;
  closest_city: string;
  friends: Array<string>;
  closest_friend1: string;
  closest_friend2: string;
  closest_friend3: string;
}
