import { Button, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import DetailNote from "./detail";
import CreateNote from "./add";

const dummyNotes = [
  {
    month: '05',
    years: '2024',
    day: '15',
    datas: [
      {
        id: 1,
        title: 'Note 1',
        content: 'This is the first note'
      },
      {
        id: 2,
        title: 'Note 2',
        content: 'This is the second note'
      }
    ]
  },
  {
    month: '05',
    years: '2024',
    day: '16',
    datas: [
      {
        id: 3,
        title: 'Note 3',
        content: 'This is the third note'
      }
    ]
  },
  {
    month: '05',
    years: '2024',
    day: '17',
    datas: [
      {
        id: 4,
        title: 'Note 4',
        content: 'This is the fourth note'
      },
      {
        id: 5,
        title: 'Note 5',
        content: 'This is the fifth note'
      }
    ]
  }
];

interface GroupDateProps {
  date: string;
  children: React.ReactNode;
}

const GroupDate: React.FC<GroupDateProps> = ({ date, children }) => (
  <Stack>
    <Text fontSize='lg'>{date}</Text>
    {children}
  </Stack>
)

interface NoteItemsProps {
  date: string;
  title: string;
  content: string;
}

const NoteItems = ({ date, title, content }: NoteItemsProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <Stack
      cursor={"pointer"}
      spacing={1}
      px={5} py={2}
      bg='gray.50'
      rounded={"lg"}
      border={"1px"}
      borderColor={"gray.200"}
      transition='all 0.2s'
      _hover={{ bg: 'gray.100' }}
      onClick={onOpen}
    >
      <Text fontSize='lg' fontWeight={'bold'}>{title}</Text>
      <Text>{content}</Text>

      <DetailNote
        isOpen={open}
        onClose={onClose}
        data={{ title, content, date }}
      />
    </Stack>
  )
}

export default function TransactionNotes() {
  const [create, setCreate] = useState<boolean>(false);
  const onCreate = () => setCreate(true);
  const onClose = () => setCreate(false);

  return (
    <Container maxW={"6xl"}>
      <CreateNote isOpen={create} onClose={onClose} />

      <Stack spacing={8}>
        <Flex justify={"space-between"} align={"center"}>
          <Heading fontSize={"xl"}>Note Reports</Heading>
          <Button colorScheme={"blue"} onClick={onCreate}>Add Note</Button>
        </Flex>

        <Stack spacing={4}>
          {dummyNotes.map((note, index) => (
            <GroupDate key={index} date={`${note.day}/${note.month}/${note.years}`}>
              {note.datas.map((data, index) => {
                const date = `${note.day}/${note.month}/${note.years}`;
                return (
                  <NoteItems key={index} {...data} date={date} />
                )
              })}
            </GroupDate>
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}