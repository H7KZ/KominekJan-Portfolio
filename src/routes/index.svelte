<script>
    import Navbar from '/src/components/common/Navbar.svelte';

    import Homepage from '/src/components/fullComponent/Homepage.svelte';

    import About from '/src/components/fullComponent/About.svelte';

    import Skills from '/src/components/fullComponent/Skills.svelte';

    import Development from '/src/components/fullComponent/Development.svelte';
</script>

<div class="pb-24">
    <nav>
        <Navbar />
    </nav>

    <section id="home">
        <Homepage />
    </section>

    <div class="flex flex-col gap-32">
        <section id="about">
            <About />
        </section>
    
        <section id="skills">
            <Skills />
        </section>
    </div>
</div>

