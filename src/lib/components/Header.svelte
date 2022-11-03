<script>
    import { HomeIcon, SearchIcon } from 'svelte-feather-icons'
    import { Button } from 'attractions';
</script>

<div class='bg-slate-700 p-2 w-full h-12 flex justify-start'>
    <a href='/' class='text-white'>
        <Button style='height: 100%; padding: 0px 10px;'>
            <HomeIcon size='25' />
        </Button>
    </a>
    <a href='/search' class='text-white'>
        <Button style='height: 100%; margin-left: 10px; display: flex;'>
            <SearchIcon size='25' />
            <span class='ml-2 h-full flex items-center pt-1'>Search By VIN</span>
        </Button>
    </a>
</div>