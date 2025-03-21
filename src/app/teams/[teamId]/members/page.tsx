import { TeamMemberTable } from "@/components/team-members-table";
import { getRoles } from "@/api";
import { getTeamMemberships } from "@/api/teams/get-team-memberships";
import { SectionHeader } from "@/components/section-header";
import { Section } from "@/components/section";
import React from "react";

type Props = {
  params: Promise<{
    teamId: string;
  }>
}

const MemberListPage = async (props: Props) => {
  const params = await props.params;
  const members = await getTeamMemberships(params.teamId);

  return (
    <Section>
      <SectionHeader title="Team members" />
      <TeamMemberTable membership={members} />
    </Section>
  );
};

export default MemberListPage;
