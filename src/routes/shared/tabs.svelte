<script>
    import { createEventDispatcher } from 'svelte';
    // dispatch = new event
    const dispatch = createEventDispatcher();
    /**
     * @type {any}
     */
     export let items;
    /**
     * @type {any}
     */
     export let activeItem;
</script>

<div class="tabs">
    <ul>
        <!--for-each loop with each tab as item-->
        {#each items as item}
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!--Set activeItem to tab that was clicked-->
            <li on:click={() => dispatch('tabChange', item)}>
                <!--Used in style to make current tab blue and underlined-->
                <div class:active={item === activeItem}>{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        margin-bottom: 40px;
    }

    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }

    li {
        margin: 0 16px;
        font-size: 18px;
        cursor: pointer;
    }
    .active {
        color:blue;
        border-bottom: 2px solid blue;
        padding-bottom: 8px;
    }
</style>