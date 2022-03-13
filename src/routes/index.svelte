<script>
    import Navbar from '/src/components/common/Navbar.svelte';

    import Homepage from '/src/components/fullComponent/Homepage.svelte';

    import About from '/src/components/fullComponent/About.svelte';
</script>

<div>
    <nav>
        <Navbar />
    </nav>

    <section id="home">
        <Homepage />
    </section>

    <section id="about">
        <About />
    </section>

</div>

