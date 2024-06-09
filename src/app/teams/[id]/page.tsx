import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import Tasks from "../tasks";

export type Props = {
  params: any;
}

const Page = ({params: {id}}: Props) => {

  console.log(id)

  return (
    <section>
      <div className="container">
        <div className="mt-6">
          <h2 className="text-3xl font-bold tracking-tight">Mary James</h2>
        </div>
        <div className="mt-4">
          <Tabs defaultValue="reminder" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="reminders">Reminders</TabsTrigger>
              <TabsTrigger value="medications">Medications</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
            </TabsList>
            <TabsContent value="reminders">Check appointments here</TabsContent>
            <TabsContent value="medications">Track medications taken</TabsContent>
            <TabsContent value="tasks"><Tasks/></TabsContent>
            <TabsContent value="notes">Record some important notes</TabsContent>
            <TabsContent value="members">Manages the members of this team</TabsContent>
          </Tabs>

        </div>
      </div>
    </section>
  );
};

export default Page;