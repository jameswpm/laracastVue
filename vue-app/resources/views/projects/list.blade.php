@if(count($projects) > 0)
  <h2>My projects</h2>
  <ul>
    @foreach($projects as $project)
      <li>{{ $project->name }}</li>
    @endforeach
  </ul>
@endif
