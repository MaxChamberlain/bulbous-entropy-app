<script lang='ts'>
    // import Button from '@smui/button'
    import { Button, TextField } from 'attractions';
    import HelperText from '@smui/textfield/helper-text';
    import { Label } from '@smui/common';
    import Divider from '$lib/components/Divider.svelte'
    import LinearProgress from '@smui/linear-progress';

    let VIN = ''
    let ZIP = ''
    let PRICE = ''

    import { searchData } from './search'
    let data: any = null
    const setData = (d: any) => {
        data = d
    }
    let loading = false
    const setLoading = (l: boolean) => {
        loading = l
    }
</script>
<div class='bg-white px-2 rounded-md w-full flex justify-around gap-x-2 shadow h-16'>
    <div class='w-full h-full' >
        <TextField outline label="VIN" bind:value={VIN} class='outline-none' />
    </div>
    <div class='w-full h-full' >
        <TextField outline label="ZIP" bind:value={ZIP} class='outline-none' />
    </div>
    <div class='w-full h-full' >
        <TextField withItem outline label="PRICE" bind:value={PRICE} class='outline-none' />
    </div>
    <div class='w-1/2 h-full mt-2' >
        <Button on:click={() => searchData(VIN, ZIP, PRICE, setData, setLoading)} outline class='w-full h-12'>
            Search
        </Button>
    </div>
</div>

<div class='bg-white p-2 rounded-md w-full flex justify-around gap-x-2 shadow mt-4'>
    {#if loading}
        <LinearProgress indeterminate class='m-4' />
    {/if}
    {#if data}
        <div class='w-full'>
            <div class='text-2xl font-bold'>
                {data.vehicle_name}
            </div>
            <div class='text-stone-700'>
                {data.VIN}
            </div>
            <Divider />
        </div>
    {/if}
</div>