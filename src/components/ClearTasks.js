import {flex, Button, Flex, useToast} from '@chakra-ui/react';
import supabase from '../supabase';

export default function ClearTasks(){

    const toast=useToast();

    async function handleClear(){

        const { error } = await supabase.from('todos').delete().not('text','eq','Donot Delete mE');
        
        toast({
            title: error || 'All tasks deleted',
            position: 'top',
            status: error ? 'error' : 'success',
            duration: 2000,
            isClosable: true,
        })

        
    }

    return (
        <Flex>
            <Button
                colorScheme='gray' px="8" h="45" color="gray.500" mt="10"
            onClick={handleClear}
            >
                Clear Tasks
            </Button>
        </Flex>
    );
}