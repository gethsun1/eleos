import Image from 'next/image';

export type TeamProfileData = { name: string; role: string; qualifications?: string; biography?: string; image: string; imageAlt: string };

/** Reusable, verified-content team card. Publish only after Eleos approves the details and image. */
export function TeamProfile({ profile }: { profile: TeamProfileData }) {
  return <article className="team-profile"><Image src={profile.image} alt={profile.imageAlt} width={640} height={720} /><div><h2>{profile.name}</h2><p className="team-role">{profile.role}</p>{profile.qualifications && <p>{profile.qualifications}</p>}{profile.biography && <p>{profile.biography}</p>}</div></article>;
}
