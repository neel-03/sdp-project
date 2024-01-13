import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  StackDivider,
  Box,
  Stack,
  Grid,
  GridItem,
  Center
} from '@chakra-ui/react'
import Link from 'next/link';

function Quiz() {
  return (
    <>
      <div className="pt-5 md:pt-20 lg:pt-30 h-screen overflow-scroll">
        <Grid
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(1, 1fr)'
          gap={30}
        >
          <GridItem className='h-fit'>
            <Center>
              <Card className='border-2 rounded-md w-full mx-5 md:mx-15 lg:mx-28 gap-4 py-3 shadow-xl'>
                <CardHeader className='font-extrabold text-gray-900'>
                  <Heading size='md' className='text-start text-md md:text-lg lg:text-2xl font-extrabold text-gray-900 mx-8'>Trending topics</Heading>
                </CardHeader>
                <CardBody>
                  <Stack divider={<StackDivider />} className='mx-8' spacing='4'>
                    <Box>
                      <Heading size='xs'>
                        topic 1
                      </Heading>
                    </Box>
                    <Box>
                      <Heading size='xs'>
                        topic 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis placeat rem cum, illum quidem modi itaque temporibus
                      </Heading>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </Center>
          </GridItem>
          <GridItem className='h-fit'>
            <Center>
              <Card
                overflow='revert'
                variant='outline'
                className='border-2 shadow-xl rounded-md px-2 mx-5 md:mx-15 lg:mx-28 w-full gap-4 py-3'>
                <CardHeader className='font-extrabold text-gray-900'>
                  <Heading size='md' className='text-start text-md md:text-lg lg:text-2xl font-extrabold text-gray-900 mx-8'>Generate Quizzes using AI!</Heading>
                </CardHeader>
                <CardBody className='lg:flex md:flex items-center'>
                  <Text className='text-start text-gray-900 font-normal py-2 mx-8'>
                    Just give the name of topic and select number of questions to generate quiz
                  </Text>
                  <Link href='/dashboard/quiz' className="mt-1 mx-8 block px-3 rounded-full py-3 text-white font-bold bg-gray-900 border-solid border-2 hover:bg-white hover:text-gray-900 mb-1 sm:ml-2 dm:mt-5 text-center">
                    Generate quiz
                  </Link>
                </CardBody>
              </Card>
            </Center>
          </GridItem>
        </Grid>
      </div>
    </>
  )
}

export default Quiz

/*<Card align='center' className='border-2 rounded-md mt-2 mx-28 mr-28 w-full gap-4 py-3'>
      <CardHeader>
        <Heading className='text-center'>Trending Topics</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Summary
            </Heading>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Overview
            </Heading>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Analysis
            </Heading>
          </Box>
        </Stack>
      </CardBody>
    </Card> */